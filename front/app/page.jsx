import Feed from "@/components/Feed"


function Home() {
  return (
    <div className="w-full flex-center flex-col">
        <h1 className="head_text text-score text-center">
            Discover and share
            <br className="max-md:hidden text-center"></br>
            <span className="orange_gradient text-center">
               AI-Powwered Prompts</span>
        </h1>
        <p className="desc text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere dicta soluta cupiditate aliquam accusantium libero facilis minus veritatis laboriosam officiis autem error obcaecati consequuntur, corrupti a asperiores natus ipsam recusandae vel nemo totam incidunt! Iure consectetur, suscipit deserunt dolor saepe eius tempore? 
        </p>

        <Feed/>
    </div>
  )
}

export default Home