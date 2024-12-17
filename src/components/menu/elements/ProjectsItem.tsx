const ProjectsItem = ({ title }: { title: string }) => {
  return (
    <div className="cardProjects">
      <div className="imageProjects">
        <img
          src={"projectImage/" + title + ".jpg"}
          alt={title + " image"}
          className="object-cover w-[100%] h-[100%]"
        />
      </div>

      <div className="textProjects">
        <button className=" font-poppins text-[rgb(41,41,51)] font-medium bg-[#ffc96b] rounded-md m-auto px-3 py-2 ">
          <a href="/#">See More</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectsItem;
