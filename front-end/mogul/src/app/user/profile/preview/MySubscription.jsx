export default function MySubscription(data) {
  const activityData = data.data || [];
  console.log(activityData);
  return (
    <>
      {/* {activityData.map((library, index) => {
        <tr key={index}>
          <td>{library.id}</td>
          <td>{library.title}</td>
          <td>{library.writer}</td>
          <td>{library.date}</td>
          <td>{library.view}</td>
        </tr>
      })} */}
    </>
  );
}
