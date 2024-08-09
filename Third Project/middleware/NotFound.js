const NotFound = (req,res) =>
{
res.status(404).send("Route Not Found")
}
export default NotFound;