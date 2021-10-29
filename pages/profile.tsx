import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';

export default function Profile({ user }) {
  return (
    <div style={{ maxWidth: '520px', margin: '96px auto' }}>
      <h4>You're signed in</h4>
      <h5>Email: {user.email}</h5>
      <hr />

      <div style={{ color: 'green' }}>
        User data retrieved server-side (from Cookie in getServerSideProps):
      </div>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>

      <div>
        <Link href="/">
          <a>Static example with useSWR</a>
        </Link>
      </div>
    </div>
  );
}
