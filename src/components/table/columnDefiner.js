const columnStyle = { padding: 12 };

export const columns = [{
  Header: 'Name',
  accessor: 'name',
  style: columnStyle,
}, {
  Header: 'Hair Color',
  accessor: 'hair_color',
  style: columnStyle
}, {
  Header: 'Age',
  accessor: 'age',
  style: columnStyle
}, {
  Header: 'Height',
  accessor: 'height',
  style: columnStyle,
  Cell: (row => Number(row.value).toFixed(2))
}, {
  Header: 'Weight',
  accessor: 'weight',
  style: columnStyle,
  Cell: (row => Number(row.value).toFixed(2))
}, {
  Header: 'Gender',
  style: columnStyle,
  Cell: (row => row.original.hair_color === "Pink" ? "Female" : "Male")
}];