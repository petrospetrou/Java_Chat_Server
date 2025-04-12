
class Messages extends React.Component {
constructor(props) {
		super(props);

	}
    render() {
        if (!this.props.messages) {
            return <div>No Messages yet...</div>
        }

        return (
        <div>
              {this.props.messages.map((message,i) => {
                      if(message.messageType==="Question"){
                               return(  <p> {QuestionMessage(message)} </p> )
                      }
                      else{
                            return   (<p> {AnswerMessage(message)} </p> )
                      }
                      })
                  }


         </div>
        );
    }
}

function QuestionMessage(props){
  return (
<div id="questionMessage">
    <table >
        <tbody>
        <tr>
            <td>
                <div className="media w-50 mb-3">
                    <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle">
                    </img>
                    <form action="/deleteMessage" method="GET">
                    <div className="media-body1 ml-3">
                        <div className="bg-light rounded py-2 px-3 mb-2">
                            <p className="text-small mb-0 text-muted"> {props.messageText} </p>

                            <input name="id" value={props.id} readOnly hidden/>
                            <button type="submit" className="deletebutton">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     width="20" height="20"
                                     viewBox="0 0 32 32">
                                    <path d="M 13.59375 4 L 13.28125 4.28125 L 12.5625 5 L 6 5 L 6 7 L 7 7 L 7 25 C 7 26.644531 8.355469 28 10 28 L 22 28 C 23.644531 28 25 26.644531 25 25 L 25 7 L 26 7 L 26 5 L 19.4375 5 L 18.71875 4.28125 L 18.40625 4 Z M 14.4375 6 L 17.5625 6 L 18.28125 6.71875 L 18.59375 7 L 23 7 L 23 25 C 23 25.554688 22.554688 26 22 26 L 10 26 C 9.445313 26 9 25.554688 9 25 L 9 7 L 13.40625 7 L 13.71875 6.71875 Z M 11 11 L 11 22 L 13 22 L 13 11 Z M 15 11 L 15 22 L 17 22 L 17 11 Z M 19 11 L 19 22 L 21 22 L 21 11 Z"></path>
                                </svg>
                            </button>

                        </div>

                        <p className="small text-muted"> {props.messageDate} </p>



                    </div>
                    </form>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>

  );
}
function AnswerMessage(props){
  return (
<div id="answerMessage">
    <table >
        <tbody>
        <tr>
            <td> </td>
            <td>
                <form action="/deleteMessage" method="GET">
                <div className="hi">
                    <div className="media-body">
                        <div className="bg-primary rounded py-2 px-3 mb-2">
                            <p className="text-small mb-0 text-white"> {props.messageText} </p>

                            <input name="id" value={props.id} readOnly hidden/>
                            <button type="submit" className="deletebutton">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     width="20" height="20"
                                     viewBox="0 0 32 32">
                                    <path d="M 13.59375 4 L 13.28125 4.28125 L 12.5625 5 L 6 5 L 6 7 L 7 7 L 7 25 C 7 26.644531 8.355469 28 10 28 L 22 28 C 23.644531 28 25 26.644531 25 25 L 25 7 L 26 7 L 26 5 L 19.4375 5 L 18.71875 4.28125 L 18.40625 4 Z M 14.4375 6 L 17.5625 6 L 18.28125 6.71875 L 18.59375 7 L 23 7 L 23 25 C 23 25.554688 22.554688 26 22 26 L 10 26 C 9.445313 26 9 25.554688 9 25 L 9 7 L 13.40625 7 L 13.71875 6.71875 Z M 11 11 L 11 22 L 13 22 L 13 11 Z M 15 11 L 15 22 L 17 22 L 17 11 Z M 19 11 L 19 22 L 21 22 L 21 11 Z"></path>
                                </svg>
                            </button>

                        </div>
                        <p className="small text-muted"> {props.messageDate} </p>



                    </div>
                </div>
                </form>
            </td>
        </tr>
        </tbody>
    </table>
</div>
  )
}

class MessageArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }
    componentDidMount() {
        fetch("/MessageList")
            .then(res => res.json())
            .then(
                (response) => {
                    this.setState({
                        messages: response
                    });
                },
                (error) => {
                    alert(error);
                }
            )
    }
    render() {
        return (
            <div id="main">
                <Messages messages={this.state.messages}/>
            </div>
        );
    }
}


ReactDOM.render(
    <MessageArea />,
    document.getElementById('messageArea')
);