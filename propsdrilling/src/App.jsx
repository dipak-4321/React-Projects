
import './App.css'
import Card from './components/Card'

const App = ()=> {
  const users = [
  {
    name: "Tony Stark",
    role: "UI/UX Designer",
    company: "Epic Coders",
    price: "$32/hr",
    availability: "available",
    image: "https://www.pngitem.com/pimgs/m/131-1319519_transparent-iron-man-logo-png-marvel-iron-man.png",
    tags: ["UI", "UX", "Photoshop"],
    extraTags: '+4',
    description: "Tony Stark is a 38 year old owner of Stark Industry and creator of Jarvis Personal Assistent",
    buttonText: "VIEW PROFILE"
  },

  {
    name: "Peter Parker",
    role: "Frontend Developer",
    company: "Web Masters",
    price: "$28/hr",
    availability: "available",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkMb0z5aA_qhxQwDC-Id-943XSWI6dlt9GI3jFmrUaw&s=10",
    tags: ["HTML", "CSS", "React"],
    extraTags: '+3',
    description: "Peter Parker is a talented frontend developer who creates modern web interfaces.",
    buttonText: "VIEW PROFILE"
  },

  {
    name: "Bruce Wayne",
    role: "Product Designer",
    company: "Wayne Tech",
    price: "$40/hr",
    availability: "available",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmb0zW9KcvaMbGHJ-8RPjFtHO5Z6RtYE-CnfRfsF_cWg&s=10",
    tags: ["Figma", "UI", "Branding"],
    extraTags: '+5',
    description: "Bruce Wayne is an experienced product designer focused on premium digital products.",
    buttonText: "VIEW PROFILE"
  },

  {
    name: "Steve Rogers",
    role: "UX Researcher",
    company: "Shield Labs",
    price: "$30/hr",
    availability: "available",
    image: "data:image/jpeg;base64,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",
    tags: ["UX", "Research", "Testing"],
    extraTags: 2,
    description: "Steve Rogers specializes in user research and creating simple user experiences.",
    buttonText: "VIEW PROFILE"
  },

  {
    name: "Natasha Romanoff",
    role: "UI Designer",
    company: "Red Design",
    price: "$35/hr",
    availability: "available",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrT-BoOZCzTdDr9mXsjgaTNTnSQD_DveOktfj4L7bkQ&s=10",
    tags: ["UI", "Figma", "Sketch"],
    extraTags: 4,
    description: "Natasha Romanoff is a creative UI designer who loves clean and modern interfaces.",
    buttonText: "VIEW PROFILE"
  },

  {
    name: "Clark Kent",
    role: "Full Stack Developer",
    company: "Daily Code",
    price: "$38/hr",
    availability: "available",
    image: "https://i.pravatar.cc/300?img=15",
    tags: ["React", "Node", "MongoDB"],
    extraTags: 6,
    description: "Clark Kent is a full stack developer building scalable and powerful web applications.",
    buttonText: "VIEW PROFILE"
  },

  {
    name: "Diana Prince",
    role: "Graphic Designer",
    company: "Amazon Studio",
    price: "$29/hr",
    availability: "available",
    image: "https://i.pravatar.cc/300?img=16",
    tags: ["Illustrator", "Photoshop", "Logo"],
    extraTags: 3,
    description: "Diana Prince is a graphic designer specializing in visual identity and branding.",
    buttonText: "VIEW PROFILE"
  },

  {
    name: "Barry Allen",
    role: "JavaScript Developer",
    company: "Speed Code",
    price: "$31/hr",
    availability: "available",
    image: "https://i.pravatar.cc/300?img=17",
    tags: ["JavaScript", "React", "API"],
    extraTags: 4,
    description: "Barry Allen is a JavaScript developer who builds fast and interactive applications.",
    buttonText: "VIEW PROFILE"
  },

  {
    name: "Arthur Curry",
    role: "Web Designer",
    company: "Ocean Digital",
    price: "$27/hr",
    availability: "available",
    image: "https://i.pravatar.cc/300?img=18",
    tags: ["HTML", "CSS", "Design"],
    extraTags: 2,
    description: "Arthur Curry is a web designer focused on responsive and user-friendly websites.",
    buttonText: "VIEW PROFILE"
  },

  {
    name: "Wanda Maximoff",
    role: "Creative Designer",
    company: "Vision Studio",
    price: "$36/hr",
    availability: "available",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEnpxKPJTzvA1zrj9rQTZl189H5XJdu2IYoXKEjXBpg&s=10",
    tags: ["UI", "UX", "Creative"],
    extraTags: 5,
    description: "Wanda Maximoff is a creative designer who specializes in unique digital experiences.",
    buttonText: "VIEW PROFILE"
  }
];
  return (
  <div className="parent">
    
    {users.map((elem,idx)=>{
      
      return (
        <Card name={elem.name} price={elem.price} role={elem.role} company={elem.company} tag0={elem.tags[0]} tag1={elem.tags[1]} tag2={elem.tags[2]}
        extratags={elem.extraTags} des={elem.description} img={elem.image}/>
      )
    })}

    

 </div>
  )
}
export default App