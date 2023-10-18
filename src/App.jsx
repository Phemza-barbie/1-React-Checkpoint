import ProfileCard from "./components/ProfileCard";
const App = () => {
  const employees = [
    {
      fname: "John Deo",
      position: "CEO",
      image: "https://www.nydailynews.com/wp-content/uploads/migration/2016/01/25/3ZKRAVRSRYYIHRZL2OVSM52UYE.jpg",
      phone: "09038691486",
      email:"Ogunbayofemi2020@gmail.com",
    },
    {
      fname: "John Deo",
      position: "CEO",
      image: "https://www.nydailynews.com/wp-content/uploads/migration/2016/01/25/3ZKRAVRSRYYIHRZL2OVSM52UYE.jpg",
      phone: "09038691486",
      email:"Ogunbayofemi2020@gmail.com",
    },
    {
      fname: "John Deo",
      position: "CEO",
      image: "https://www.nydailynews.com/wp-content/uploads/migration/2016/01/25/3ZKRAVRSRYYIHRZL2OVSM52UYE.jpg",
      phone: "09038691486",
      email:"Ogunbayofemi2020@gmail.com",
    },
    {
      fname: "Royal luxury",
      position: "CSO",
      image: "https://www.nydailynews.com/wp-content/uploads/migration/2016/01/25/3ZKRAVRSRYYIHRZL2OVSM52UYE.jpg",
      phone: "09038691486",
      email:"Royal2020@gmail.com",
    },
    {
      fname: "Oseni Quayum",
      position: "Gateman",
      image: "https://www.nydailynews.com/wp-content/uploads/migration/2016/01/25/3ZKRAVRSRYYIHRZL2OVSM52UYE.jpg",
      phone: "09038691486",
      email:"Oseniquayumolodo@gmail.com",
    },
  ];
  return (
    <>
     <h1>Awesome React.js</h1>
     <div>
      {employees.map(({fname, position, image, phone, email}, index) =>(
        <ProfileCard 
        key={index}
        name={fname}
        position={position}
        image={image}
        phone={phone}
        email={email}
        />
      ))}
     </div>
     
    </>
  )
};

export default App
