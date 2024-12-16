// AdminDashboard.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import '../styles/adminDashboard.css';

const AdminDashboard = () => {
  const [teamData, setTeamData] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [wideButtons, setWideButtons] = useState([]);
  const { authToken, logout } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [editingMember, setEditingMember] = useState(null);
  const [editingNotification, setEditingNotification] = useState(null);
  const [editingWideButton, setEditingWideButton] = useState(null);
  const [newMember, setNewMember] = useState({
    name: '',
    designation: '',
    team: '',
    order: 0,
    imgSrc: '',
  });
  const [newNotification, setNewNotification] = useState('');
  const [newWideButton, setNewWideButton] = useState({
    button_text: '',
    url: '',
  });

  // New State for Queries
  const [queries, setQueries] = useState([]);

  const headers = {
    Authorization: `Bearer ${authToken}`,
  };

  useEffect(() => {
    fetchTeamData();
    fetchNotificationsData();
    fetchWideButtonsData();
    fetchQueriesData();
    // eslint-disable-next-line
  }, []);

  // Fetch Academic Team Data
  const fetchTeamData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/academic-team', { headers });
      setTeamData(response.data);
    } catch (err) {
      setError('Failed to fetch team data');
    }
  };

  // Fetch Notifications Data
  const fetchNotificationsData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/notifications', { headers });
      setNotifications(response.data);
    } catch (err) {
      setError('Failed to fetch notifications');
    }
  };

  // Fetch Wide Buttons Data
  const fetchWideButtonsData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/wide-buttons', { headers });
      setWideButtons(response.data);
    } catch (err) {
      setError('Failed to fetch wide buttons');
    }
  };

  // Fetch Queries Data
  const fetchQueriesData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contacts', { headers });
      setQueries(response.data);
    } catch (err) {
      setError('Failed to fetch queries');
    }
  };

  // Academic Team Handlers
  const handleDeleteMember = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/academic-team/${id}`, { headers });
      setTeamData(teamData.filter((member) => member.id !== id));
    } catch (err) {
      setError('Failed to delete member');
    }
  };

  const handleEditMember = (member) => {
    setEditingMember(member);
  };

  const handleUpdateMember = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/academic-team/${editingMember.id}`,
        editingMember,
        { headers }
      );
      fetchTeamData();
      setEditingMember(null);
    } catch (err) {
      setError('Failed to update member');
    }
  };

  const handleAddMember = async () => {
    try {
      await axios.post('http://localhost:5000/api/academic-team', newMember, { headers });
      fetchTeamData();
      setNewMember({ name: '', designation: '', team: '', order: 0, imgSrc: '' });
    } catch (err) {
      setError('Failed to add member');
    }
  };

  // Notifications Handlers
  const handleDeleteNotification = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notifications/${id}`, { headers });
      setNotifications(notifications.filter((notif) => notif.id !== id));
    } catch (err) {
      setError('Failed to delete notification');
    }
  };

  const handleEditNotification = (notification) => {
    setEditingNotification(notification);
  };

  const handleUpdateNotification = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/notifications/${editingNotification.id}`,
        editingNotification,
        { headers }
      );
      fetchNotificationsData();
      setEditingNotification(null);
    } catch (err) {
      setError('Failed to update notification');
    }
  };

  const handleAddNotification = async () => {
    try {
      await axios.post('http://localhost:5000/api/notifications', { notification_text: newNotification }, { headers });
      fetchNotificationsData();
      setNewNotification('');
    } catch (err) {
      setError('Failed to add notification');
    }
  };

  // Wide Buttons Handlers
  const handleDeleteWideButton = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/wide-buttons/${id}`, { headers });
      setWideButtons(wideButtons.filter((button) => button.id !== id));
    } catch (err) {
      setError('Failed to delete wide button');
    }
  };

  const handleEditWideButton = (button) => {
    setEditingWideButton(button);
  };

  const handleUpdateWideButton = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/wide-buttons/${editingWideButton.id}`,
        editingWideButton,
        { headers }
      );
      fetchWideButtonsData();
      setEditingWideButton(null);
    } catch (err) {
      setError('Failed to update wide button');
    }
  };

  const handleAddWideButton = async () => {
    try {
      await axios.post('http://localhost:5000/api/wide-buttons', newWideButton, { headers });
      fetchWideButtonsData();
      setNewWideButton({ button_text: '', url: '' });
    } catch (err) {
      setError('Failed to add wide button');
    }
  };

  return (
    <div className="adminDashboard">
      <button onClick={logout} className="logoutButton">
        Logout
      </button>
      <h2>Admin Dashboard</h2>
      {error && <div className="error">{error}</div>}

      {/* Academic Team Management */}
      <div className="sectionContainer">
        <h3>Academic Team Management</h3>

        {/* Add New Member */}
        <div className="formContainer">
          <h4>Add New Member</h4>
          <input
            type="text"
            placeholder="Name"
            value={newMember.name}
            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Designation"
            value={newMember.designation}
            onChange={(e) => setNewMember({ ...newMember, designation: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Team"
            value={newMember.team}
            onChange={(e) => setNewMember({ ...newMember, team: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Order"
            value={newMember.order}
            onChange={(e) => setNewMember({ ...newMember, order: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newMember.imgSrc}
            onChange={(e) => setNewMember({ ...newMember, imgSrc: e.target.value })}
          />
          <button onClick={handleAddMember}>Add Member</button>
        </div>

        {/* Team Members List */}
        <table className="dataTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Team</th>
              <th>Order</th>
              <th>Image URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamData.map((member) => (
              <tr key={member.id}>
                <td>
                  {editingMember && editingMember.id === member.id ? (
                    <input
                      type="text"
                      value={editingMember.name}
                      onChange={(e) =>
                        setEditingMember({ ...editingMember, name: e.target.value })
                      }
                    />
                  ) : (
                    member.name
                  )}
                </td>
                <td>
                  {editingMember && editingMember.id === member.id ? (
                    <input
                      type="text"
                      value={editingMember.designation}
                      onChange={(e) =>
                        setEditingMember({ ...editingMember, designation: e.target.value })
                      }
                    />
                  ) : (
                    member.designation
                  )}
                </td>
                <td>
                  {editingMember && editingMember.id === member.id ? (
                    <input
                      type="text"
                      value={editingMember.team}
                      onChange={(e) =>
                        setEditingMember({ ...editingMember, team: e.target.value })
                      }
                    />
                  ) : (
                    member.team
                  )}
                </td>
                <td>
                  {editingMember && editingMember.id === member.id ? (
                    <input
                      type="number"
                      value={editingMember.order}
                      onChange={(e) =>
                        setEditingMember({ ...editingMember, order: e.target.value })
                      }
                    />
                  ) : (
                    member.order
                  )}
                </td>
                <td>
                  {editingMember && editingMember.id === member.id ? (
                    <input
                      type="text"
                      value={editingMember.imgSrc}
                      onChange={(e) =>
                        setEditingMember({ ...editingMember, imgSrc: e.target.value })
                      }
                    />
                  ) : member.imgSrc ? (
                    <a href={member.imgSrc} target="_blank" rel="noopener noreferrer">
                      View Image
                    </a>
                  ) : (
                    'No Image'
                  )}
                </td>
                <td>
                  {editingMember && editingMember.id === member.id ? (
                    <>
                      <button onClick={handleUpdateMember}>Save</button>
                      <button onClick={() => setEditingMember(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditMember(member)}>Edit</button>
                      <button onClick={() => handleDeleteMember(member.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notifications Management */}
      <div className="sectionContainer">
        <h3>Notifications Management</h3>

        {/* Add New Notification */}
        <div className="formContainer">
          <h4>Add New Notification</h4>
          <input
            type="text"
            placeholder="Notification Text"
            value={newNotification}
            onChange={(e) => setNewNotification(e.target.value)}
            required
          />
          <button onClick={handleAddNotification}>Add Notification</button>
        </div>

        {/* Notifications List */}
        <table className="dataTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Notification Text</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notif) => (
              <tr key={notif.id}>
                <td>{notif.id}</td>
                <td>
                  {editingNotification && editingNotification.id === notif.id ? (
                    <input
                      type="text"
                      value={editingNotification.notification_text}
                      onChange={(e) =>
                        setEditingNotification({ ...editingNotification, notification_text: e.target.value })
                      }
                    />
                  ) : (
                    notif.notification_text
                  )}
                </td>
                <td>
                  {editingNotification && editingNotification.id === notif.id ? (
                    <>
                      <button onClick={handleUpdateNotification}>Save</button>
                      <button onClick={() => setEditingNotification(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditNotification(notif)}>Edit</button>
                      <button onClick={() => handleDeleteNotification(notif.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Wide Buttons Management */}
      <div className="sectionContainer">
        <h3>Calenders Management</h3>

        {/* Add New Wide Button */}
        <div className="formContainer">
          <h4>Add New Calender</h4>
          <input
            type="text"
            placeholder="Button Text"
            value={newWideButton.button_text}
            onChange={(e) => setNewWideButton({ ...newWideButton, button_text: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="URL"
            value={newWideButton.url}
            onChange={(e) => setNewWideButton({ ...newWideButton, url: e.target.value })}
            required
          />
          <button onClick={handleAddWideButton}>Add Calender</button>
        </div>

        {/* Wide Buttons List */}
        <table className="dataTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Button Text</th>
              <th>URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wideButtons.map((button) => (
              <tr key={button.id}>
                <td>{button.id}</td>
                <td>
                  {editingWideButton && editingWideButton.id === button.id ? (
                    <input
                      type="text"
                      value={editingWideButton.button_text}
                      onChange={(e) =>
                        setEditingWideButton({ ...editingWideButton, button_text: e.target.value })
                      }
                    />
                  ) : (
                    button.button_text
                  )}
                </td>
                <td>
                  {editingWideButton && editingWideButton.id === button.id ? (
                    <input
                      type="text"
                      value={editingWideButton.url}
                      onChange={(e) =>
                        setEditingWideButton({ ...editingWideButton, url: e.target.value })
                      }
                    />
                  ) : (
                    <a href={button.url} target="_blank" rel="noopener noreferrer">
                      View URL
                    </a>
                  )}
                </td>
                <td>
                  {editingWideButton && editingWideButton.id === button.id ? (
                    <>
                      <button onClick={handleUpdateWideButton}>Save</button>
                      <button onClick={() => setEditingWideButton(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditWideButton(button)}>Edit</button>
                      <button onClick={() => handleDeleteWideButton(button.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Received Queries Section */}
      <div className="sectionContainer">
        <h3>Received Queries</h3>
        <table className="dataTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Program/Department</th>
              <th>Message</th>
              <th>Submission Date</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((query) => (
              <tr key={query.id}>
                <td>{query.id}</td>
                <td>{query.name}</td>
                <td>{query.email}</td>
                <td>{query.subject}</td>
                <td>{query.program}</td>
                <td>{query.message}</td>
                <td>{new Date(query.submission_date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
