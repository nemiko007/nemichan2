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
                    日本大学文理学部地理学科 ４年
                </p>
                <p>
                    専攻分野：リモートセンシング
                </p>
                <p>
                    趣味：音楽とサブカルチャー
                </p>
                <br></br>
                <p>
                    資格
                </p>
                <p>
                    普通自動車第一種運転免許
                </p>
                <p>
                    中学校教諭第一種免許状（理科）　取得見込み
                </p>
                <p>
                    高等学校教諭第一種免許状（理科）　取得見込み
                </p>
                <a href="https://twitter.com/nemiko007"><i class="fa-brands fa-x-twitter fa-5x"></i></a>
            </div>
        </>
    )
}