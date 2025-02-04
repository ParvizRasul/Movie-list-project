1. Show all branches local: git branch
2. Create new branch branch name: git branch my_new_branch (if everthig good as not any error message it means it is created)
(before sitching new brand make sure you saved and commit  all changes)

3.how we do commmit all in command line?
to chech what we changes we have that need to add git tracking system - git status,

to add all file 
 (git add .) or (git add -A)

 to the git stage- git commit -m"your message"- commmit all changes locally (saves the new changes to master locally)

 git push origin master - this will push the changes to the remote repo

 3. change to different branch
 git checkout branch_name 
 git switch branch_name

 4.create and switch  to branch in one line: 
 -`git checkout -b branch_name`
 - `git switch -c branch_name`

5. In case you want delete branch use - 
-`git branch -d branch_name` if there is new changes it will not allow you to delete it
-`git branch -D branch_name` -gona remove branch without problem

6. Finally when you committed all the chhanges to local new branch you want to push it to remore repo
-`git push origin branch_name`nr
