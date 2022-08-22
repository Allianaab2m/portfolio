import Link from "next/link"

type Props = {
  className?: string
  id: string
  key: string
  title: string
  description: string
  updateDate: string
}

export const BlogCard = (props: Props) => {
 return ( 
  <Link href={`blog/${props.id}`}>
    <div className={"card " + props.className}>
      <div className="card-body">
        <h2 className="card-title">
          {props.title}
        </h2>
        <p className="text-md">{props.description}</p>
        <footer className="flex">
          <p className="">{new Date(Date.parse(props.updateDate)).toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  </Link>
  )
}
