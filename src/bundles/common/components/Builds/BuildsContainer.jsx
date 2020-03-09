import React from 'react';
import Builds from './Builds'

class BuildsContainer extends React.Component {
    constructor(){
        super()
        this.state = { champions: [] }
    }

    componentDidMount(){
        this.setState({champions: [
            {"id":1,"name":"Akali"}, 
            {"id":2,"name":"Zed"}, 
            {"id":3,"name":"Blitzcrank"},
            {"id":4,"name":"Garen"},
            {"id":5,"name":"Ryze"},
            {"id":6,"name":"Ekko"},
            {"id":7,"name":"Teemo"}, 
            {"id":8,"name":"Tryndamere"}, 
            {"id":9,"name":"Hecarim"},
            {"id":10,"name":"Diana"},
            {"id":11,"name":"Kayle"},
            {"id":12,"name":"Kayne"},
            {"id":13,"name":"Soraka"}, 
            {"id":14,"name":"Leona"}, 
            {"id":15,"name":"Alistar"},
            {"id":16,"name":"Riven"},
            {"id":17,"name":"Noctune"},
            {"id":18,"name":"Leblanc"},
            {"id":19,"name":"Nidalee"}, 
            {"id":20,"name":"Sona"}, 
            {"id":21,"name":"Blitzcrank"},
            {"id":22,"name":"Garen"},
            {"id":23,"name":"Ryze"},
            {"id":24,"name":"Ekko"},
            {"id":25,"name":"Akali"}, 
            {"id":26,"name":"Zed"}, 
            {"id":27,"name":"Blitzcrank"},
            {"id":28,"name":"Garen"},
            {"id":29,"name":"Ryze"},
            {"id":30,"name":"Ekko"}
        ]
        })
    }

    render() {
        return <Builds champions={this.state.champions} />
    }
}

export default BuildsContainer