function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content(props) {
  return (<p style={{color: props.color}}>{props.text}</p>);
}

function Footer() {
  return (<h1>Created by Me, of course.</h1>);
}

function App() {
  return (
    <>
       <Header />
       <Content color="goldenrod" text="This is my first React Application!" />
       <Content color="pink" text="Wish me luck..."/>
       <Content color="purple" text="I think I've got it!" />
       <Footer />
    </>
  );
}

export default App;
