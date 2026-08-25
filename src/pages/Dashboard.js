import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { signout } = useAuth();
  return (
    <div>
      <h2>Welcome — you're signed in!</h2>
      <button onClick={signout}>Sign Out</button>
    </div>
  );
}
