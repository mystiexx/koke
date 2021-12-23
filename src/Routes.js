import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App.js";
import Team from "./components/Team/Team.js";
import Shop from "./components/Shop/Shop.js";
import Header from "./components/Header/Header.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Service from "./components/Info/Service.js";
import MemberIndex from "./components/Member/Index.js";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

const Index = () => {
    return (
        <ChakraProvider>
            <Router>
                <Switch>
                    <Route path="/become-a-member" exact component={MemberIndex} />
                    <div className="App">
                        <Header>
                            <Route path="/" exact component={App} />
                            <Route path="/team" exact component={Team} />
                            <Route path="/shop" exact component={Shop} />
                            <Route path="/about" exact component={About} />
                            <Route path="/contact" exact component={Contact} />
                            <Route path="/service" exact component={Service} />
                        </Header>
                    </div>
                </Switch>
            </Router>
        </ChakraProvider>
    );
};

export default Index;
