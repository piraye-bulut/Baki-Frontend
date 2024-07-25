import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const CommentSection = ({ poemId, poemType }) => {
  const { user, token } = useAuth();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:3333/comments/${poemType}/${poemId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : '',
          },
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setComments(sortedData);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [poemId, poemType, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newComment.trim()) return;

    const commentData = {
      user: `${user?.firstName || 'Anonymous'} ${user?.lastName || 'User'}`,
      text: newComment,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch(`http://localhost:3333/comments/${poemType}/${poemId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token ? `Bearer ${token}` : '',
        },
        body: JSON.stringify(commentData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Network response was not ok:', response.statusText, errorData);
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      const updatedComments = [data, ...comments].sort((a, b) => new Date(b.date) - new Date(a.date));
      setComments(updatedComments);
      setNewComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const handleEditClick = (comment) => {
    setEditCommentId(comment.id);
    setEditCommentText(comment.text);
  };

  const handleEditChange = (e) => {
    setEditCommentText(e.target.value);
  };

  const handleSaveEdit = async (id) => {
    if (!editCommentText.trim()) return;

    const updatedCommentData = {
      text: editCommentText,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch(`http://localhost:3333/comments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token ? `Bearer ${token}` : '',
        },
        body: JSON.stringify(updatedCommentData),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const updatedComment = await response.json();
      const updatedComments = comments.map(comment => (comment.id === id ? updatedComment : comment)).sort((a, b) => new Date(b.date) - new Date(a.date));
      setComments(updatedComments);
      setEditCommentId(null);
      setEditCommentText('');
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3333/comments/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
        },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const updatedComments = comments.filter(comment => comment.id !== id).sort((a, b) => new Date(b.date) - new Date(a.date));
      setComments(updatedComments);
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-orange-100 p-4 rounded-lg">
      <h3 className="text-xl font-bold text-red-700 mb-4">Yorumlar</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id || comment.date} className="mb-4 p-4 border border-gray-200 rounded-lg bg-white shadow">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <p className="font-semibold text-gray-800">{comment.user}</p>
              <p className="text-sm text-gray-600 sm:mt-0 mt-1">{formatDate(comment.date)}</p>
            </div>
            {editCommentId === comment.id ? (
              <>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded resize-none"
                  value={editCommentText}
                  onChange={handleEditChange}
                  rows="4"
                ></textarea>
                <button
                  onClick={() => handleSaveEdit(comment.id)}
                  className="mt-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 mr-2"
                >
                  Kaydet
                </button>
                <button
                  onClick={() => setEditCommentId(null)}
                  className="mt-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
                >
                  İptal
                </button>
              </>
            ) : (
              <>
                <p>{comment.text}</p>
                {user && comment.user === `${user.firstName} ${user.lastName}` && (
                  <>
                    <button
                      onClick={() => handleEditClick(comment)}
                      className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 mr-2"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => handleDelete(comment.id)}
                      className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300"
                    >
                      Sil
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        ))
      ) : (
        <p>Henüz yorum yapılmamış.</p>
      )}

      {user ? (
        <form onSubmit={handleSubmit} className="mt-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded resize-none"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Yorumunuzu yazın..."
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            Yorum Yap
          </button>
        </form>
      ) : (
        <a href="/login" className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
          Yorum Yapmak için Giriş Yap
        </a>
      )}
    </div>
  );
};

export default CommentSection;