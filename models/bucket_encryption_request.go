// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// BucketEncryptionRequest bucket encryption request
//
// swagger:model bucketEncryptionRequest
type BucketEncryptionRequest struct {

	// enc type
	EncType *BucketEncryptionType `json:"encType,omitempty"`

	// kms key ID
	KmsKeyID string `json:"kmsKeyID,omitempty"`
}

// Validate validates this bucket encryption request
func (m *BucketEncryptionRequest) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateEncType(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *BucketEncryptionRequest) validateEncType(formats strfmt.Registry) error {
	if swag.IsZero(m.EncType) { // not required
		return nil
	}

	if m.EncType != nil {
		if err := m.EncType.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("encType")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this bucket encryption request based on the context it is used
func (m *BucketEncryptionRequest) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateEncType(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *BucketEncryptionRequest) contextValidateEncType(ctx context.Context, formats strfmt.Registry) error {

	if m.EncType != nil {
		if err := m.EncType.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("encType")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *BucketEncryptionRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *BucketEncryptionRequest) UnmarshalBinary(b []byte) error {
	var res BucketEncryptionRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
