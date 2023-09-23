
const About = () => {
    return (
        <div className="mx-auto max-w-screen-xl mt-20">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                <div className='mb-10' data-aos="fade-right">
                    <h1 className="text-5xl font-bold mt-20 p-3">Everyone has a story to tell and write own story.</h1>
                    <p className="text-xl mt-8 px-3">Pre-write is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight.</p>
                    <div className="mt-8">
                        <h1 className="text-2xl font-bold px-3">Copywriter & SEO expert</h1>
                        <p className="text-xl mt-2 px-3">Lectus quam dictumst fusce feugiat vivamus nibh sem semper commodo molestie dui.</p>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-2xl font-bold px-3">Creative & Content Writer</h1>
                        <p className="text-xl mt-2 px-3">Lectus quam dictumst fusce feugiat vivamus nibh sem semper commodo molestie dui.</p>
                    </div>
                </div>
                {/* form */}
                <div data-aos="fade-left">
                    <img className='w-[100%] h-auto' src="https://kitnew.moxcreative.com/writtimo/wp-content/uploads/sites/32/2023/01/img5.png" alt="" data-aos="zoom-in" />
                </div>
            </div>
        </div>
    );
};

export default About;