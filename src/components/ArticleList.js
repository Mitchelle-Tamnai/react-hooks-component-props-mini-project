import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    return (
        <main>
            {posts.map(i => (
                <Article key={i.id} title={i.title} date={i.date} preview={i.preview} />
            ))}
        </main>
    );
}

export default ArticleList