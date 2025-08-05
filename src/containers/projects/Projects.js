import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
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
  // Remove all Open Source Projects rendering logic
  return null;
}
