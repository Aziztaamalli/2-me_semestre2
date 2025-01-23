# search.py
# ---------
# Licensing Information:  You are free to use or extend these projects for
# educational purposes provided that (1) you do not distribute or publish
# solutions, (2) you retain this notice, and (3) you provide clear
# attribution to UC Berkeley, including a link to http://ai.berkeley.edu.
#
# Attribution Information: The Pacman AI projects were developed at UC Berkeley.
# The core projects and autograders were primarily created by John DeNero
# (denero@cs.berkeley.edu) and Dan Klein (klein@cs.berkeley.edu).
# Student side autograding was added by Brad Miller, Nick Hay, and
# Pieter Abbeel (pabbeel@cs.berkeley.edu).


"""
In search.py, you will implement generic search algorithms which are called by
Pacman agents (in searchAgents.py).
"""

import heapq
import util

class SearchProblem:
    """
    This class outlines the structure of a search problem, but doesn't implement
    any of the methods (in object-oriented terminology: an abstract class).

    You do not need to change anything in this class, ever.
    """

    def getStartState(self):
        """
        Returns the start state for the search problem.
        """
        util.raiseNotDefined()

    def isGoalState(self, state):
        """
          state: Search state
          
        Returns True if and only if the state is a valid goal state.
        """
        util.raiseNotDefined()

    def getSuccessors(self, state):
        """
          state: Search state

        For a given state, this should return a list of triples, (successor,
        action, stepCost), where 'successor' is a successor to the current
        state, 'action' is the action required to get there, and 'stepCost' is
        the incremental cost of expanding to that successor.
        """
        util.raiseNotDefined()

    def getCostOfActions(self, actions):
        """
         actions: A list of actions to take

        This method returns the total cost of a particular sequence of actions.
        The sequence must be composed of legal moves.
        """
        util.raiseNotDefined()


def tinyMazeSearch(problem):
    """
    Returns a sequence of moves that solves tinyMaze.  For any other maze, the
    sequence of moves will be incorrect, so only use this for tinyMaze.
    """
    from game import Directions
    s = Directions.SOUTH
    w = Directions.WEST
    return  [s, s, w, s, w, w, s, w]

def depthFirstSearch(problem):
    """
    Search the deepest nodes in the search tree first.

    Your search algorithm needs to return a list of actions that reaches the
    goal. Make sure to implement a graph search algorithm.

    To get started, you might want to try some of these simple commands to
    understand the search problem that is being passed in:

    print "Start:", problem.getStartState()
    print "Is the start a goal?", problem.isGoalState(problem.getStartState())
    print "Start's successors:", problem.getSuccessors(problem.getStartState())
    """
    "*** YOUR CODE HERE ***"
    stack=util.Stack()
    visited=[]
    startNode=(problem.getStartState(),[])        #Here we are pushing the start state
    stack.push(startNode)
    while not stack.isEmpty():
        popped=stack.pop()
        location=popped[0]
        path=popped[1]
        if location not in visited:  #In each node we see if it is visited,if it's not then we are getting the successors and push
            visited.append(location) #its elements to the stack and we are building the path in depth-first logic and way
            if problem.isGoalState(location):
                return path
            successors=problem.getSuccessors(location)
            for suc in list(successors):
                if suc[0] not in visited:
                    stack.push((suc[0],path+[suc[1]]))
    return []
    util.raiseNotDefined()

def breadthFirstSearch(problem):
    """Search the shallowest nodes in the search tree first."""
    "*** YOUR CODE HERE ***"
    queue=util.Queue()
    visited=[]                                                       #We are doing the same thing like DFS with the difference that here we are using
    startNode=(problem.getStartState(),[])                           #queue instead of stack to build the path according to breadth-first logic
    queue.push(startNode)
    while not queue.isEmpty():
        popped=queue.pop()
        location=popped[0]
        path=popped[1]
        if location not in visited:
            visited.append(location)
            if problem.isGoalState(location):
                return path
            successors=problem.getSuccessors(location)
            for suc in list(successors):
                if suc[0] not in visited:
                    queue.push((suc[0],path + [suc[1]]))
    return []
    util.raiseNotDefined()

def uniformCostSearch(problem):
    """Search the node of least total cost first."""
    "*** YOUR CODE HERE ***"
    Pr_q=util.PriorityQueue()
    visited=dict()
    state=problem.getStartState()
    nd = {}
    nd["pred"]=None                                                             #We are getting the parent of a node,the state the action and
    nd["act"]=None                                                              #compute the cost and building the path(aka actions)
    nd["state"]=state
    nd["cost"]=0
    Pr_q.push(nd,nd["cost"])

    while not Pr_q.isEmpty():
        nd=Pr_q.pop()
        state=nd["state"]
        cost=nd["cost"]

        if visited.has_key(state):
            continue
        visited[state]=True
        if problem.isGoalState(state)==True:
            break
        for suc in problem.getSuccessors(state):
            if not visited.has_key(suc[0]):
                new_nd={}
                new_nd["pred"]=nd
                new_nd["state"]=suc[0]
                new_nd["act"]=suc[1]
                new_nd["cost"]=suc[2]+cost
                Pr_q.push(new_nd,new_nd["cost"])
    actions=[]
    while nd["act"] !=None:
        actions.insert(0,nd["act"])
        nd=nd["pred"]
    return actions
    util.raiseNotDefined()

def nullHeuristic(state, problem=None):
    """
    A heuristic function estimates the cost from the current state to the nearest
    goal in the provided SearchProblem.  This heuristic is trivial.
    """
    return 0

def manhattanHeuristic(state, problem):
    """
    A heuristic function that estimates the Manhattan distance from the current state
    to the nearest goal in the provided SearchProblem.
    """
    x1, y1 = state
    x2, y2 = problem.goal
    return abs(x1 - x2) + abs(y1 - y2)

def aStarSearch(problem, heuristic=manhattanHeuristic):
    """Search the node that has the lowest combined cost and heuristic first."""
    open_list = util.PriorityQueue()
    open_list.push((problem.getStartState(), []), 0)  # Priority queue containing nodes to explore, initially with the start node and a cost of 0
    closed_list = set()  # Set feha nodes li ena t3adit aalehom
    g_score = {problem.getStartState(): 0}  # Dictionary feha current cost bch nousel beha lkoll node ml start point
    while not open_list.isEmpty(): #
        current, actions = open_list.pop()
        if problem.isGoalState(current):  # ken node li ena feha heya goal na7bes
            return actions
        if current not in closed_list:
            closed_list.add(current)
            for successor, action, cost in problem.getSuccessors(current):
                new_cost = g_score[current] + cost
                if successor not in g_score or new_cost < g_score[successor]:
                    g_score[successor] = new_cost
                    total_cost = new_cost + heuristic(successor, problem)
                    open_list.push((successor, actions + [action]), total_cost)
    return None  # ken ma famma 7atta path return [] fergha
# Abbreviations
bfs = breadthFirstSearch
dfs = depthFirstSearch
astar = aStarSearch
ucs = uniformCostSearch
