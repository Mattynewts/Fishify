import React, { useState } from 'react';
import groupsData from '../groups.json';
import '../styling/hamburger.css';
import { useAuth } from './authcontext.js';
import { IoMdArrowBack, IoMdClose } from 'react-icons/io'; // Add IoMdClose for the close button
import { useNavigate } from 'react-router-dom';
import userData from '../user.json'; 



const Hamburger = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    

    const [groups, setGroups] = useState(groupsData.groups.map(group => ({
        ...group,
        color: '#' + Math.floor(Math.random()*16777215).toString(16) // Assign a random color
    })));

    const [showLeaveModal, setShowLeaveModal] = useState(false);
    const [showManageModal, setShowManageModal] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(groups.length > 0 ? groups[0] : null);

    const totalGroups = 10;
    const joinedGroupCount = groups.length;

    const enhancedGroups = groups.map(group => ({
        ...group,
        isOwner: user && user.username === group.owner
    }));

    const handleLeaveGroup = (groupId) => {
        const updatedGroups = groups.filter(group => group.group_id !== groupId);
        setGroups(updatedGroups);
        setShowLeaveModal(false);
        // If the selected group is the one being left, reset selectedGroup
        if (selectedGroup && groupId === selectedGroup.group_id) {
            setSelectedGroup(null);
        }
    };

    const handleLeaveGroupClick = group => {
        setSelectedGroup(group); // Set the selected group
        setShowLeaveModal(true);
    };

    const handleManageGroupClick = group => {
        setSelectedGroup(group);
        setShowManageModal(true);
    };

    const handleDeleteGroup = groupId => {
        const updatedGroups = groups.filter(group => group.group_id !== groupId);
        setGroups(updatedGroups);
        setShowManageModal(false);
        // If the selected group is the one being deleted, reset selectedGroup
        if (selectedGroup && groupId === selectedGroup.group_id) {
            setSelectedGroup(null);
        }
    };

    const closeManageModal = () => {
        setShowManageModal(false);
    };

    const goBack = () => {
        navigate('/dashboard'); 
    };

    return (
        <>
            <div className="hamburger-page-container">
                <div className="hamburger-header">
                    <IoMdArrowBack className="back-arrow" onClick={goBack} />
                    <h1 className="title">Joined Groups</h1>
                    <div className="group-count">{joinedGroupCount} / {totalGroups} Groups</div>
                </div>
    
                <div className="groups-list-container">
                <div className="groups-list">
                    {enhancedGroups.map(group => (
                        <div key={group.group_id} className="group-item">
                            <div className="group-color-indicator" style={{ backgroundColor: group.color }}></div>
                            <span className="group-name">{group.group_name}</span>
                            <span 
                                className={`group-action-button ${group.isOwner ? 'manage' : 'leave'}`}
                                onClick={() => group.isOwner ? handleManageGroupClick(group) : handleLeaveGroupClick(group)}
                                role="button"
                                tabIndex={0}
                            >
                                {group.isOwner ? 'Manage' : 'Leave'}
                            </span>
                        </div>
                    ))}
                </div>
                </div>
                
                <button className="create-group-button">Create Group</button>
            </div>
    
            {showLeaveModal && (
            <div className="modal-overlay">
                <div className="modal-box">
                    <div className="modal-content">
                        <p>Are you sure you want to leave the group?</p>
                        <div className="modal-actions">
                            <button className="modal-button leave" onClick={() => selectedGroup && handleLeaveGroup(selectedGroup.group_id)}>Leave</button>
                            <button className="modal-button stay" onClick={() => setShowLeaveModal(false)}>Stay</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    
            {showManageModal && (
                <div className="modal-overlay">
                    <div className="manage-group-modal-content">
                        <div className="manage-group-modal-header">
                            <h2 className="manage-group-modal-title">{selectedGroup?.group_name}</h2>
                            <span className="manage-group-delete-option" onClick={() => handleDeleteGroup(selectedGroup?.group_id)}>Delete Group</span>
                            <IoMdClose className="manage-group-modal-close" onClick={closeManageModal} />
                        </div>
                        <div className="invite-section">
    <label htmlFor="emailInput" className="invite-label">Email Address</label>
    <input type="email" id="emailInput" className="email-input" placeholder="example@email.com" />
    <div className="buttons-container">
        <button className="invite-button">Send Invite</button>
        <span className="copy-link-button">Copy Shareable Link</span>
    </div>
</div>

      <div className="member-list-section">
        <h3>Current Members (6/15)</h3>
        <div className="member-list">
        <div className="member-list">
    {/* Dynamic list from user.json */}
    {userData.map((user, index) => (
      <div key={index} className="member-item">
        <span className="member-name">{user.name}</span>
        <span className="member-role">Member</span> {/* or 'Creator' or 'Pending' */}
        <span className="kick-button">Kick</span>
      </div>
    ))}
  </div>
</div>
    </div>
  </div>
  </div>
)}
        </>
    );
    
};

export default Hamburger;
