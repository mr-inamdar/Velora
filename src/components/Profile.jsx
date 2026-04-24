function Profile({ user, onLogout }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Address: {user.address}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
export default Profile;