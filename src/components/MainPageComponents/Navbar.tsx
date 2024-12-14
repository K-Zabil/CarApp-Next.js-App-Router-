import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/">CarApp</Link></li>
        <li><Link href="/add">Add Car</Link></li>
        <li><Link href="/auth/login">Login</Link></li>
        <li><Link href="/auth/register">Register</Link></li>
      </ul>
    </nav>
  );
}