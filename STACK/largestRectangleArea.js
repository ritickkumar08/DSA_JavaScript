// Given an array of integers heights representing the histogram's bar 
// height where the width of each bar is 1, return the area of the 
// largest rectangle in the histogram.

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0
    for (let i = 0; i < heights.length; i++) {
        let left = -1
        let right = heights.length

        for (let t = i - 1; t >= 0; t--) {
            if (heights[t] < heights[i]) {
                left = t;
                break;
            }
        }

        for (let p = i + 1; p < heights.length; p++) {
            if (heights[p] < heights[i]) {
                right = p
                break
            }
        }
        let width = right - left - 1
        let area = width * heights[i]
        if (area > maxArea) {
            maxArea = area
        }
    }
    return maxArea
}

//stack method
var largestRectangleArea = function (heights) {
    let left = []
    let stack = new Stack()

    for (let i = 0; i < heights.length; i++) {
        if (stack.isEmpty()) {
            left.push(-1)
            stack.push(heights[i], i)
        } else if (!stack.isEmpty() && stack.top()[0] < heights[i]) {
            left.push(stack.top()[1])
            stack.push(heights[i], i)
        }else if(!stack.isEmpty() && top()[0] >= heights[i]){
            while (!stack.isEmpty() && stack.top()[0] >= heights[i]) {
                stack.pop()
            }if(stack.isEmpty()){
                left.push(-1)
                stack.push(heights[i],i)
            }else if(!stack.isEmpty() && stack.top()[0] < heights[i]){
                left.push(stack.top()[1])
                stack.push([heights[i],i])
            }
        }

        stack.clear()
        let right = []
        for (let i = heights.length - 1; i > 0 ; i--) {
        if (stack.isEmpty()) {
            right[i] = heights.length
            stack.push(heights[i], i)
        } else if (!stack.isEmpty() && stack.top()[0] < heights[i]) {
            right[i] = stack.top()[1]
            stack.push(heights[i], i)
        } else if(!stack.isEmpty() && top()[0] >= heights[i]){
            while (!stack.isEmpty() && stack.top()[0] >= heights[i]) {
                stack.pop()
            }if(stack.isEmpty()){
                right[i] = heights.length
                stack.push(heights[i],i)
            }else if(!stack.isEmpty() && stack.top()[0] < heights[i]){
                right[i] = stack.top()[1]
                stack.push([heights[i],i])
            }
        }


        let width = right[i] - left[i] - 1
        let area = width * heights[i]
        if (area > maxArea) {
            maxArea = area
        }
    }
    return maxArea
};

//https://leetcode.com/problems/largest-rectangle-in-histogram/submissions/1841040682/