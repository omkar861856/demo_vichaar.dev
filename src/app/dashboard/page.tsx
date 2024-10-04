"use client"
import BarChart from "@/components/ui/BarChart";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import PageTitle from "@/components/ui/PageTitle";
import SalesCard, { SalesProps } from "@/components/ui/SalesCard";
import Card, { CardProps, CardContent } from "@/components/ui/Card1";
import PostCard from "@/components/ui/PostCard";
import { PostProps } from "@/components/ui/PostCard";
import peep1 from '../assets/Avatars/peep-1.png'
import peep2 from '../assets/Avatars/peep-10.png'
import peep3 from '../assets/Avatars/peep-101.png'
import peep4 from '../assets/Avatars/peep-11.png'
import peep5 from '../assets/Avatars/peep-12.png'
import peep6 from '../assets/Avatars/peep-13.png'
import peep7 from '../assets/Avatars/peep-14.png'
import peep8 from '../assets/Avatars/peep-15.png'
import peep9 from '../assets/Avatars/peep-16.png'
import peep10 from '../assets/Avatars/peep-18.png'



const posts: PostProps[] = [
    {
        id: 1,
        username: "johnDoeDev",
        avatar: `${peep1.src}`,
        timeAgo: "1h",
        content: "Just pushed a new feature to my portfolio website. Now using Next.js for SSR! 🚀",
        codeSnippet: `import { GetServerSideProps } from 'next';`,
        tags: ["Next.js", "React", "SSR"],
        likes: 45,
        comments: 12,
        githubLink: "https://github.com/johnDoeDev/portfolio",
    },
    {
        id: 2,
        username: "aliceCodes",
        avatar: `${peep2.src}`,
        timeAgo: "3h",
        content: "Implemented authentication in my app using JWT and bcrypt. 💪",
        codeSnippet: `const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });`,
        tags: ["Node.js", "JWT", "Authentication"],
        likes: 78,
        comments: 23,
        githubLink: "https://github.com/aliceCodes/auth-app",
    },
    {
        id: 3,
        username: "devDave",
        avatar: `${peep3.src}`,
        timeAgo: "5h",
        content: "Here's how you can optimize performance in large React apps with React.memo.",
        codeSnippet: `export default React.memo(MyComponent);`,
        tags: ["React", "Performance", "React.memo"],
        likes: 33,
        comments: 8,
        githubLink: "https://github.com/devDave/react-performance",
    },
    {
        id: 4,
        username: "jsMaster",
        avatar: `${peep4.src}`,
        timeAgo: "8h",
        content: "Successfully integrated GraphQL with my Node.js backend. Much cleaner API! ✨",
        codeSnippet: `const server = new ApolloServer({ typeDefs, resolvers });`,
        tags: ["GraphQL", "Node.js", "Apollo"],
        likes: 61,
        comments: 17,
        githubLink: "https://github.com/jsMaster/graphql-node",
    },
    {
        id: 5,
        username: "cssNinja",
        avatar: `${peep5.src}`,
        timeAgo: "10h",
        content: "Experimenting with CSS Grid. It's amazing for creating flexible layouts! 🖼️",
        codeSnippet: `display: grid; grid-template-columns: repeat(3, 1fr);`,
        tags: ["CSS", "CSS Grid", "Layouts"],
        likes: 50,
        comments: 10,
        githubLink: "https://github.com/cssNinja/css-grid-layouts",
    },
    {
        id: 6,
        username: "pythonGuru",
        avatar: `${peep6.src}`,
        timeAgo: "12h",
        content: "Started a new project with Flask and SQLAlchemy for quick backend development. 🐍",
        codeSnippet: `from flask import Flask\nfrom flask_sqlalchemy import SQLAlchemy`,
        tags: ["Python", "Flask", "SQLAlchemy"],
        likes: 40,
        comments: 5,
        githubLink: "https://github.com/pythonGuru/flask-sqlalchemy",
    },
    {
        id: 7,
        username: "vueFanatic",
        avatar: `${peep7.src}`,
        timeAgo: "15h",
        content: "Built a simple CRUD app with Vue.js and Firebase for real-time data sync. 🔥",
        codeSnippet: `this.$firestore.collection('tasks').add(newTask);`,
        tags: ["Vue.js", "Firebase", "CRUD"],
        likes: 55,
        comments: 14,
        githubLink: "https://github.com/vueFanatic/vue-crud-firebase",
    },
    {
        id: 8,
        username: "dataDiva",
        avatar: `${peep8.src}`,
        timeAgo: "18h",
        content: "Visualized some cool data insights using D3.js and SVG elements. 📊",
        codeSnippet: `d3.select('svg').append('circle').attr('cx', 50).attr('cy', 50).attr('r', 40);`,
        tags: ["D3.js", "Data Visualization", "SVG"],
        likes: 70,
        comments: 20,
        githubLink: "https://github.com/dataDiva/d3-visualizations",
    },
    {
        id: 9,
        username: "devSamantha",
        avatar: `${peep9.src}`,
        timeAgo: "1d",
        content: "Redesigned my blog using Tailwind CSS. The utility-first approach is a game changer! 🎨",
        codeSnippet: `bg-gradient-to-r from-blue-500 to-purple-500`,
        tags: ["Tailwind CSS", "UI/UX", "Design"],
        likes: 100,
        comments: 40,
        githubLink: "https://github.com/devSamantha/tailwind-blog",
    },
    {
        id: 10,
        username: "rustacean",
        avatar: `${peep10.src}`,
        timeAgo: "2d",
        content: "Learning Rust by building a simple web server from scratch. 🚀",
        codeSnippet: `fn handle_request(stream: TcpStream) { /* handle HTTP request */ }`,
        tags: ["Rust", "Web Development", "TCP"],
        likes: 65,
        comments: 18,
        githubLink: "https://github.com/rustacean/rust-web-server",
    }
]

export default function page() {
    return (
        <div className="flex flex-col gap-5 w-full">
            {/* <PageTitle title="Landing" /> */}
            <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-1">
                <CardContent className="flex justify-between gap-4">
                    {posts.map((data, index) => (
                        <PostCard
                            key={index}
                            avatar={data.avatar}
                            username={data.username}
                            content={data.content}
                            likes={data.likes}
                            id={data.id}
                            timeAgo={data.timeAgo}
                            codeSnippet={data.codeSnippet}
                            tags={data.tags}
                            comments={data.comments}
                            githubLink={data.githubLink} />
                    ))}
                </CardContent>
            </section>
        </div>
    )
}