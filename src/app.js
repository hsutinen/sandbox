

var Table = React.createClass({
  correctContents: [ ["A", "B", "C", "D"],
                     ["E", "F", "G", "H"],
                     ["I", "J", "K", "L"],
                     ["M", "N", "O", "P"] ],

  getInitialState: function() {
    return { contents: [ ["A", "B", "C", "D"],
                         ["E", "F", "G", "H"],
                         ["I", "J", "K", "L"],
                         ["M", "N", "O", "P"] ]
    };
  },

  shuffle: function() {
    var newContents = this.state.contents;
    var x = newContents[1][1];
    newContents[1][1] = newContents[2][2];
    newContents[2][2] = x;
    this.setState( { contents: newContents } );
  },

  render: function() {
    var tableRows = this.state.contents.map(function(row, i) {
      return (
        <TableRow rowId = {i} data = {row} />
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
      return (
        <tr>
          {this.props.data.map(function(text, i) {
            return <td id = {rowId.toString() + i.toString()}><button>{text}</button></td>;
          })}
        </tr>
      );
	}	
});


ReactDOM.render(
  <Table />,
  document.getElementById('content')
);



