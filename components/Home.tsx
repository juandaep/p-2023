import { Author } from "types/Author";

interface HomeProps {
    author: Author
}

function Home(props: HomeProps): React.ReactElement {
    const {author} = props
    return(
        <div className="flex flex-1 flex-col justify-center px-6 py-10 dark:text-gray-100 md:px-10">
            <h1 className="text-3xl font-bold dark:text-gray-100 md:text-5xl">
                Hi, I am {author.shortname}
            </h1>

        </div>
    )
}