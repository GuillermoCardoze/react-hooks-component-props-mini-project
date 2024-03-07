import Article from "./Article";

function ArticleList({posts}) {
    return (
        <main>
            {posts.map(({title, date, preview, id}) => <Article key={id} title={title} date={date} preview={preview} /> )}
        </main>
    )
}

export default ArticleList;