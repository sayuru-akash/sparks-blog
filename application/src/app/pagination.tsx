import Link from "next/link";
import { Pagination } from "@tryghost/content-api";

export default function Pagination({
  item,
  currentUrl,
}: {
  item: Pagination;
  currentUrl: string;
}) {
  let paginationItems = [];

  for (let index = 1; index <= item?.pages; index++) {
    paginationItems.push(
      <li key={index * 2}>
        <Link
          href={index === 1 ? `/${currentUrl}/` : `/${currentUrl}/${index}`}
          className="px-3 py-2 leading-tight bg-purple-100 hover:bg-purple-200 border-transparent border rounded-lg text-black mx-1"
        >
          {index}
        </Link>
      </li>
    );
  }

  return (
    <nav aria-label="pagination" className="mx-auto my-12 container">
      <ul className="mx-auto flex justify-center -space-x-px">
        <li>
          {item.prev ? (
            <Link
              href={
                item.prev === 1
                  ? `/${currentUrl}`
                  : `/${currentUrl}/${item.prev}`
              }
              className="px-3 py-2 mr-2 border border-transparent rounded-md  leading-tight text-black bg-white hover:text-purple-700"
            >
              Prev
            </Link>
          ) : (
            " "
          )}
        </li>

        {paginationItems}

        <li>
          {item.next ? (
            <Link
              href={`/${currentUrl}/${item.next}`}
              className="px-3 py-2 ml-2 border border-transparent rounded-md leading-tight text-black bg-white hover:text-purple-700"
            >
              Next
            </Link>
          ) : (
            " "
          )}
        </li>
      </ul>
    </nav>
  );
}
