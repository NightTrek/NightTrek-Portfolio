export const getServerSideProps = async () => ({
  redirect: { destination: '/#work', permanent: true },
});

const Blog = () => null;
export default Blog;
