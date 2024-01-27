//Include OpenGL Maths Library 
#include <C:\Projects\codesnippets\c++\opengl\glm\glm.hpp>
#include <C:\Projects\codesnippets\c++\opengl\glm\ext.hpp>//GLM extensions
#include <iostream>

int main(){
    //2D VECTOR
    glm::vec2 p1 = glm::vec2(2.0f, 10.0f);
    //3D VECTOR
    glm::vec3 p2 = glm::vec3(10.0f, 5.0f, 2.0f);
    //4X4 MATRIX
    glm::mat4 matrix = glm::mat4(1.0f);
    //The 1.0f that is passed as the only argument indicates that the matrix is the identity

    //TRASLATION, we need to include GLM extensions
    glm::mat4 translation = glm::translate(glm::mat4(1.0f),glm::vec3(3.0f,4.0f,8.0f));

    //SCALE
    glm::mat4 scale = glm::scale(glm::mat4(1.0f),glm::vec3(2.0f,2.0f,2.0f));

    //ROTATION
    glm::mat5 rxMatrix = glm::rotate(glm::mat4(), glm::radians(45.0f), glm::vec3(1.0, 0.0, 0.0));
    glm::mat5 rxMatrix = glm::rotate(glm::mat4(), glm::radians(45.0f), glm::vec3(0.0, 1.0, 0.0));
    glm::mat5 rxMatrix = glm::rotate(glm::mat4(), glm::radians(45.0f), glm::vec3(0.0, 0.0, 1.0));
    //This code block rotate the object by 45 degrees along the X axis, 25.0f degrees along the Y axis, and 10.0f degrees along the Z axis.
}

