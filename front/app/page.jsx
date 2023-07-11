import Feed from "@/components/Feed"


function Home() {
  return (
    <div className="w-full flex-center flex-col">
        <h1 className="head_text text-score">
            Discover and share
            <br className="max-md:hidden"></br>
            <span className="orange_gradient text-cen
            "> AI-Powwered Prompts</span>
        </h1>
        <p className="desc text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere dicta soluta cupiditate aliquam accusantium libero facilis minus veritatis laboriosam officiis autem error obcaecati consequuntur, corrupti a asperiores natus ipsam recusandae vel nemo totam incidunt! Iure consectetur, suscipit deserunt dolor saepe eius tempore? Saepe itaque ratione laboriosam nesciunt eligendi labore amet corporis rem pariatur exercitationem omnis cumque eos veritatis architecto, maxime delectus qui, commodi corrupti beatae consequatur. Neque in beatae commodi veniam dolore sit alias repellendus eaque suscipit doloribus dicta quia, iusto, consectetur voluptas sequi explicabo nulla minus eos maiores delectus, ipsam ea. Error id veritatis similique est natus, minus eveniet.
        </p>

        <Feed/>
    </div>
  )
}

export default Home