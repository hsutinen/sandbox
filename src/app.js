var gameState =  [ ["A", "B", "C", "D"],
                   ["E", "F", "G", "H"],
                   ["I", "J", "K", "L"],
                   ["M", "N", "O", "P"] ];

var Table = React.createClass({
  correctContents: [ ["A", "B", "C", "D"],
                     ["E", "F", "G", "H"],
                     ["I", "J", "K", "L"],
                     ["M", "N", "O", "P"] ],

  getInitialState: function() {
    return { contents: gameState
    };
  },

  boardClick: function(i) {
    return function(j) {
      return function() { 
          window.alert("clicked position " + i + "," + j);
      }
    }
  },

  shuffle: function() {
    var newContents = this.state.contents;
    var x = newContents[1][1];
    newContents[1][1] = newContents[2][2];
    newContents[2][2] = x;
    this.setState( { contents: newContents } );
  },

  render: function() {
    var clickHandler = this.boardClick;
    var tableRows = this.state.contents.map(function(row, i) {
      return (
        <TableRow clickHandler = {clickHandler} rowId = {i} data = {row} />
      );
    });

  return (
    <div className="table">
      <table>
        {tableRows}
      </table>
      <button onClick={this.shuffle}>Shuffle</button>
      <br/>
      <span>
        {this.state.contents.toString() == this.correctContents.toString() ?
              "Alles in ordnung!" :
              "Things are severely fucked up! Fix it!"
        }
      </span>
    </div>
    );
  }
});

var TableRow = React.createClass({
	render: function() {
    var rowId = this.props.rowId;
    var clickHandler = this.props.clickHandler;
      return (
        <tr>
          {this.props.data.map(function(text, i) {                                           
            return (
                  <td>
                    <button onClick={clickHandler(i)(rowId)} id={rowId.toString() + i.toString()}>{text}</button>
                  </td>
            );
          })}
        </tr>
      );
	}	
});


ReactDOM.render(
  <Table />,
  document.getElementById('content')
);



