import React from 'react';
import Builds from './Builds'

class BuildsContainer extends React.Component {
    mockDatas = [];
    constructor(){
        super()
        this.mockDatas = 
        [
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
        this.state = { 
            isLoaded: false,
            error: null,
            champions: []
        }
    }

    componentDidMount(){
        // var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        //     targetUrl = 'http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json'
        // fetch(proxyUrl + targetUrl)
        //     .then(res => res.json())
        //     .then(
        //         result => {
        //             let champions = Object.keys(result.data).map(champ => {
        //                 return (
        //                     <a href="#" className="link"  key={champ.key}>
        //                         <li className="champion text-center"><h2>{champ.id}</h2></li>
        //                     </a>
        //                 )
        //             });
        //             console.log(champions)
        //             this.setState({
        //                 isLoaded: true,
        //                 champions: []
        //             });
        //         },

        //         error => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )

        var champions = this.mockDatas.map(champ => {
            return (
                <a href="#" className="link"  key={champ.id}>
                    <li className="champion text-center"><h2>{champ.name}</h2></li>
                </a>
            )
        });

        this.setState({
            isLoaded: true,
            champions: champions
        });
    }

    render() {
        return <Builds champions={this.state.champions} />
    }
}

export default BuildsContainer