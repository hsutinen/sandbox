var Table = React.createClass({

  getInitialState: function() {
    return { contents: [ ["A", "B", "C", "D"],
                         ["E", "F", "G", "H"],
                         ["I", "J", "K", "L"],
                         ["M", "N", "O", "P"] ]
    };
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
            return <td id = {rowId.toString() + i.toString()}>{text}</td>;
          })}
        </tr>
      );
	}	
});


ReactDOM.render(
  <Table />,
  document.getElementById('content')
);



