import "bulma/css/bulma.css";

export default function About() {
    return (
        <>
            <div class="has-text-centered">
                <h1 class="title">
                    About
                </h1>
                <br></br>
                <h2 class="subtitle">
                    ねみちゃんについて紹介します。
                </h2>
                <img src="/nemiko.jpg" />
                <p>
                    氏名：大窪　悠斗（おおくぼ　ゆうと）
                </p>
                <p>
                    日本大学文理学部地理学科 ３年
                </p>
                <p>
                    専攻分野：リモートセンシング
                </p>
                <p>
                    趣味：音楽とサブカルチャー
                </p>
                <br></br>
                <a href="https://twitter.com/nemiko007"><i class="fa-brands fa-x-twitter fa-5x"></i></a>
            </div>
        </>
    )
}