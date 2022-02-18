import Link from "next/link"
export default function Custom404() {
  return (
    <div
      id="error-page"
      className=""
      style={{
        backgroundImage: "url(./images/error-404.jpg)",
      }}
    >
      <div className="p-3">
        <Link href={"/"} >
        <a className="btn btn-pink btn-lg">Go Home</a>
        </Link>
      </div>
    </div>
  );
}
