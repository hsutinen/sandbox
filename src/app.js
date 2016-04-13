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
    return { contents: gameState,
             previousClick: undefined
    };
  },

  swapContents: function(a, b) {
    var newContents = this.state.contents;
    var x = newContents[a[0]][a[1]];
    newContents[a[0]][a[1]] = newContents[b[0]][b[1]];
    newContents[b[0]][b[1]] = x;
    this.setState( { contents: newContents,
                     previousClick: undefined } );
  },

  boardClick: function(i) {
    var swapContents = this.swapContents;
    var previousClick = this.state.previousClick 
    var board = this;
    return function(j) {
      return function() {
          var click = [i,j];
          if (previousClick === undefined) {
            board.setState({ contents: gameState,
                            previousClick: click });
          } else {
            swapContents(previousClick, click);
          }
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



