function Notification({ type, message }) {
  return (
    <div className={`alert alert-${type}`} role="alert" id="mnotification">
      {message}
    </div>
  );
}

export default Notification;
