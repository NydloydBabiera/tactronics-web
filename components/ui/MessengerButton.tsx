const messengerUrl = process.env.NEXT_PUBLIC_MESSENGER_URL;

export default function MessengerButton() {
  if (!messengerUrl) return null;

  return (
    <a
      href={messengerUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="messenger-button"
      aria-label="Message Tactronics on Messenger"
      title="Chat with us on Messenger"
    >
      <span className="messenger-label">Message us</span>
      <span className="messenger-icon" aria-hidden="true">
        <svg viewBox="0 0 36 36" role="img">
          <path
            fill="currentColor"
            d="M18 3C9.72 3 3 9.22 3 16.9c0 4.38 2.2 8.28 5.64 10.83V33l5.14-2.82c1.34.37 2.75.57 4.22.57 8.28 0 15-6.22 15-13.85S26.28 3 18 3Zm1.49 18.72-3.82-4.08-7.45 4.08 8.2-8.71 3.91 4.08 7.36-4.08-8.2 8.71Z"
          />
        </svg>
      </span>
    </a>
  );
}
