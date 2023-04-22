#!/bin/bash

# Components to create
components=(
  "TopicList"
  "ArticleList"
  "Article"
  "CommentList"
  "CommentForm"
  "UserProfile"
)

# Create components folder if not exists
mkdir -p components

# Create each component with starter code
for component in "${components[@]}"; do
  component_file="components/${component}.jsx"

  cat >"${component_file}" <<EOF
import React from 'react';
import { Box } from '@chakra-ui/react';

const ${component} = () => {
  return (
    <Box>
      <h1>${component}</h1>
    </Box>
  );
};

export default ${component};
EOF
done

echo "Components created successfully."
