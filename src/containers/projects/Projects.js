import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      setIsLoading(true);
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.error(
            `${error} (GitHub data not available, showing fallback content)`
          );
          setHasError(true);
          setIsLoading(false);
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }

  if (!openSource.display) {
    return null;
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          <Loading />
        </div>
      </div>
    );
  }

  // Show error state with fallback content
  if (hasError || (typeof repo === "string" || repo instanceof String)) {
    return (
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          <div className="fallback-content">
            <p>GitHub projects will be displayed here when available.</p>
            <Button
              text={"View GitHub Profile"}
              className="project-button"
              href={socialMediaLinks.github}
              newTab={true}
            />
          </div>
        </div>
      </div>
    );
  }

  // Show GitHub projects
  return (
    <Suspense fallback={renderLoader()}>
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          {repo.map((v, i) => {
            if (!v) {
              console.error(
                `Github Object for repository number : ${i} is undefined`
              );
              return null;
            }
            return (
              <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
            );
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
    </Suspense>
  );
}
