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
    
}

