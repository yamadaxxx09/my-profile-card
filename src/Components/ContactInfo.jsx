export default function ContactInfo({ email, phone }) {
  return (
    <div className="contact">
      {email && <p>Email: <a href={`mailto:${email}`}>{email}</a></p>}
      {phone && <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>}
    </div>
  );
}
