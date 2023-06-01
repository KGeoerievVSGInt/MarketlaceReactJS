const EmptyTableRowElement = ({ text }: { text: string }) => {
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>{text}</td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default EmptyTableRowElement;
