#Set the branch name
export FP_PR_BRANCH_NAME=`git branch | grep \* | cut -d ' ' -f2`
echo $FP_PR_BRANCH_NAME
