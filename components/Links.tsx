import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
const Links: FC = () => {
  const router = useRouter();
  return (
    <>
      <Link href="/ssg" prefetch={false}>
        <a className="mb-3 text-xs">Link to ssg</a>
      </Link>
      <Link href="/ssr" prefetch={false}>
        <a className="mb-3 text-xs">Link to ssr</a>
      </Link>
      <Link href="/csr" prefetch={false}>
        <a className="mb-3 text-xs">Link to csr</a>
      </Link>
      <Link href="/isr" prefetch={false}>
        <a className="mb-3 text-xs">Link to isr</a>
      </Link>
      <button className="mb-3 text-xs" onClick={() => router.push('/ssg')}>
        Route to ssg
      </button>
      <button className="mb-3 text-xs" onClick={() => router.push('/ssr')}>
        Route to ssr
      </button>
      <button className="mb-3 text-xs" onClick={() => router.push('/csr')}>
        Route to csr
      </button>
      <button className="mb-3 text-xs" onClick={() => router.push('/isr')}>
        Route to isr
      </button>
    </>
  );
};

export default Links;
