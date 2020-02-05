import React from 'react';
import Repo from './Repo';

function RepoList({ repos }) {
    return (repos.map(repo => <Repo key={repo} repo={repo} />)
    )
}

export default RepoList;