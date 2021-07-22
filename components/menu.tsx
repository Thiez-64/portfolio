import Link from "next/link";
export default function Menu() {
  return (
    <div>
      <ul>
        <li>
          <a>
            <Link href="/">Homepage</Link>
          </a>
        </li>
        <li>
          <a>
            <Link href="/stack">Web Skills</Link>
          </a>
        </li>
        <li>
          <a>
            <Link href="/work">Works Experiences</Link>
          </a>
        </li>
        <li>
          <a>
            <Link href="/education">Educations</Link>
          </a>
        </li>
      </ul>
    </div>
  );
}
