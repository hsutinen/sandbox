var Table = React.createClass({
  render: function() {
    var tableRows = this.props.data.map(function(row, i) {
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


var tableData = [ ["Table Content", " jotain muuta"], ["asdf", "blaa"] ];

ReactDOM.render(
  <Table data = {tableData}/>,
  document.getElementById('content')
);



